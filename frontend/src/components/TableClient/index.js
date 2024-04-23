import React, { useState } from "react";
import { Wrapper, Header } from "./Table.styles";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Popup } from "../Popup";
import CreateClients from "../../pages/CreateClients/CreateClients";
import DeleteClients from "../../pages/DeleteClients/DeleteClients";
import ShowClient from "../../pages/ShowClients/ShowClient";
import { FaShoppingBasket } from "react-icons/fa";

const Table = ({ clients, orders }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [showPage, setShowPage] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <Wrapper>
      <Header>
      <h1>Clients</h1>
      <MdOutlineAddBox
        className="add"
        onClick={() => {
          setOpenPopup(true);
          setShowPage("create");
        }}
      ></MdOutlineAddBox>
      </Header>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Notes</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={client._id}
            >
              <td>{index + 1}</td>
              <td
              style={{
                            width: '150px',
                        }}
              >{client.name}</td>
              <td>{client.email}</td>
              <td>{client.dob}</td>
              <td>{client.phone}</td>
              <td>{client.address}</td>
              <td>{client.notes}</td>
              <td>{client.status}</td>
              <td
                style={{
                  textAlign: "center"
                }}
              >
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    columnGap: '1rem',
                }}
                >
                  <Link to={`/order/details/${client._id}`}
                  >
                    <FaShoppingBasket
                      className="show-button"
                    ></FaShoppingBasket>
                  </Link>
                  <Link to={`client/edit/${client._id}`}
                  
                  >
                    <AiOutlineEdit
                      className="edit-button"
                    ></AiOutlineEdit>
                  </Link>

                  <Link to={`/client/delete/${client._id}`}
                  
                  >
                    <MdOutlineDelete
                      className="delete-button"
                    ></MdOutlineDelete>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPage === "create" ? (
        <Popup
          title="Create Client"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <CreateClients />
        </Popup>
      ) : showPage === "show" ? (
        <Popup
          title="Delete Client"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <ShowClient />
        </Popup>
      ) : null}
    </Wrapper>
  );
};

export default Table;
