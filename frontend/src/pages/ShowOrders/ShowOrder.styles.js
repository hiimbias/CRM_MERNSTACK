import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;;
  padding: 0 20px; // This will remove the space between the cells
    table {
        border-collapse: collapse;
        border: 1px solid;
        border-color: #d4d4d4;
        border-radius: 50%;
    }

  th,
  td {
    padding: 8px;
    text-align: center;
    
  }
    th {
        background-color: #6c9cf5;
        color: var(--white);
    }

    tr {
        background-color: #f5f5f5;
        color: black;
        border: 1px solid #d4d4d4;
    }
    .item-row:nth-child(even) {
        background-color: #f5f5f5;
        color: black;
    }

    tr:hover {
        background-color: #dbfcff;
        color: black;
    }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  h1 {
    color: #6c9cf5;
    margin: 0;
  }`;