import React, { useEffect, useState } from "react";
import styles from "./Table.module.css";
import employeeService from "../../../../services/employee.service";
import { useAuth } from "../../../../Contexts/AuthContext";
import {
  FaEdit,
  FaTrash,
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Table = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { employee } = useAuth();
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 8;

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

  const handleDelete = (employeeId) => {
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

  // Pagination logic
  const totalPages = Math.ceil(employees.length / employeesPerPage);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    Math.min(indexOfLastEmployee, employees.length) // Ensure no out-of-bounds slicing
  );

  const handleFirstPage = () => setCurrentPage(1);
  const handlePreviousPage = () =>
    setCurrentPage((prev) => (prev === 1 ? 1 : prev - 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => (prev === totalPages ? totalPages : prev + 1));
  const handleLastPage = () => setCurrentPage(totalPages);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className={`contact-section ${styles.contactSectionTwo}`}>
      <div className="contact-title">
        <h2>Employees</h2>
      </div>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {error && <div className="error-message">Error: {error}</div>}

      <div className="table-responsive">
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
            {currentEmployees.map((emp) => (
              <tr key={emp.employee_id}>
                <td data-label="Active">
                  {emp.active_employee ? "Yes" : "No"}
                </td>
                <td data-label="First Name">{emp.employee_first_name}</td>
                <td data-label="Last Name">{emp.employee_last_name}</td>
                <td data-label="Email">{emp.employee_email}</td>
                <td data-label="Phone">{emp.employee_phone}</td>
                <td data-label="Added Date">
                  {format(new Date(emp.added_date), "M-d-yyyy")}
                </td>
                <td data-label="Role">{emp.company_role_name}</td>
                <td style={{ display: "flex" }} data-label="Edit/Delete">
                  <FaEdit
                    onClick={() => handleEdit(emp.employee_id)}
                    className={styles.editButton}
                  />
                  <FaTrash
                    onClick={() => handleDelete(emp.employee_id)}
                    className={styles.deleteButton}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className={styles.paginationContainer}>
        <button
          onClick={handleFirstPage}
          disabled={currentPage === 1}
          className={styles.paginationButton}
          style={{ backgroundColor: "#081336" }}
        >
          <FaAngleDoubleLeft /> First
        </button>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={styles.paginationButton}
          style={{ backgroundColor: "#081336" }}
        >
          <FaAngleLeft /> Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
          style={{ backgroundColor: "#081336" }}
        >
          Next <FaAngleRight />
        </button>
        <button
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
          style={{ backgroundColor: "#081336" }}
        >
          Last <FaAngleDoubleRight />
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <Modal onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
    </section>
  );
};

export default Table;
