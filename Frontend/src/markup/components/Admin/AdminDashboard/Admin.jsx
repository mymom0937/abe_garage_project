import React from "react";
import { Link } from "react-router-dom";
export default function Admin() {
  return (
    <div>
      <section className="services-section">
        <div className="auto-container">
          <div className="sec-title style-two">
            <h2>Admin Dashboard</h2>
            <div className="text">
              Welcome to the Admin Dashboard! Here, you'll find all the tools
              and insights you need to manage our garage shop efficiently. From
              tracking service appointments to managing inventory and customer
              records, our dashboard is designed to streamline your workflow and
              help you stay on top of daily operations.
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>OPEN FOR ALL</h5>
                <h2>All Orders</h2>
                <a href="/admin/orders" className="read-more">
                  LIST OF ORDERS +
                </a>
                <div className="icon">
                  <span className="flaticon-gearbox"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>OPEN FOR LEADS</h5>
                <h2>New Order</h2>
                <a href="/admin/order" className="read-more">
                  ADD NEW ORDER +
                </a>
                <div className="icon">
                  <span className="flaticon-gearbox"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>OPEN FOR ADMINS</h5>
                <h2>Employees</h2>
                <Link to="/admin/employees" className="read-more">
                  LIST OF Employees +
                </Link>
                <div className="icon">
                  <span className="flaticon-brake-disc"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>OPEN FOR ADMINS</h5>
                <h2>Add Employee</h2>
                <Link to="/admin/add-employee" className="read-more">
                  Add Employee +
                </Link>
                <div className="icon">
                  <span className="flaticon-tire"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>OPEN FOR ADMINS</h5>
                <h2>Add Customer</h2>
                <Link to="/admin/add-customer" className="read-more">
                  Add Customer +
                </Link>
                <div className="icon">
                  <span className="flaticon-tire"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>OPEN FOR ADMINS</h5>
                <h2>Customers</h2>
                <Link to="/admin/customers" className="read-more">
                  List of Customers +
                </Link>
                <div className="icon">
                  <span className="flaticon-spray-gun"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>OPEN FOR ADMINS</h5>
                <h2>Services</h2>
                <Link to="/admin/services" className="read-more">
                  LIST OF Service +
                </Link>
                <div className="icon">
                  <span className="flaticon-spray-gun"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
