import React, { useEffect, useState } from "react";
import styles from "./Table.module.css";
import employeeService from "../../../../services/employee.service";
import { useAuth } from "../../../../Contexts/AuthContext";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons from react-icons
import { format } from "date-fns"; // Import date-fns
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Modal from "./Modal"; // Import the Modal component

const Table = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null); // State to track the employee to be deleted
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const { employee } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        if (employee && employee.employee_token) {
          const result = await employeeService.getAllEmployees(
            employee.employee_token
          );
          if (result.status === "success") {
            setEmployees(result.data);
          } else {
            throw new Error("Failed to fetch employees");
          }
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [employee]);

  const handleEdit = (employeeId) => {
    navigate(`/admin/employee/edit/${employeeId}`);
  };

  const handleDelete = async (employeeId) => {
    setSelectedEmployeeId(employeeId);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      if (employee && employee.employee_token) {
        await employeeService.deleteEmployee(
          employee.employee_token,
          selectedEmployeeId
        );
        setEmployees(
          employees.filter((emp) => emp.employee_id !== selectedEmployeeId)
        );
        setSuccessMessage("Employee has been successfully deleted.");
        setSelectedEmployeeId(null);
        setIsModalOpen(false);
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      setError(`Failed to delete employee: ${error.message}`);
    }
  };

  const cancelDelete = () => {
    setSelectedEmployeeId(null);
    setIsModalOpen(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="contact-section" style={{ paddingTop: "0" }}>
      <div className="contact-title" style={{ marginBottom: "30px",paddingBottom:"10px", paddingTop:"20px",paddingLeft:"45px"}}>
        <h2>Employees</h2>
      </div>
      {successMessage && (
        <div
          className="success-message"
          style={{ color: "green", marginBottom: "0px", fontSize: "20px",paddingLeft:"60px" }}
        >
          {successMessage}
        </div>
      )}
      {error && (
        <div
          className="error-message"
          style={{ color: "red", marginBottom: "20px",paddingLeft:"60px" }}
        >
          Error: {error}
        </div>
      )}
      <table className={styles.customTable}>
        <thead>
          <tr>
            <th>Active</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Added Date</th>
            <th>Role</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.employee_id}>
              <td>{emp.active_employee ? "Yes" : "No"}</td>
              <td>{emp.employee_first_name}</td>
              <td>{emp.employee_last_name}</td>
              <td>{emp.employee_email}</td>
              <td>{emp.employee_phone}</td>
              <td>{format(new Date(emp.added_date), "M-d-yyyy")}</td>
              <td>{emp.company_role_name}</td>
              <td style={{ display: "flex" }}>
                <FaEdit
                  onClick={() => handleEdit(emp.employee_id)}
                  className={`${styles.editButton} ml-3 mt-1`}
                />
                <FaTrash
                  onClick={() => handleDelete(emp.employee_id)}
                  className={`${styles.deleteButton} ml-2 mt-1`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this employee?"
      />
    </section>
  );
};

export default Table;


