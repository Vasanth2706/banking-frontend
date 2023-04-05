import React from 'react';
import DashBoardNav from '../components/DashBoardNav';
import TransactionTable from '../components/TransactionTable';

export default function Transactions(){
    return(
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <DashBoardNav/>
            <div style={{margin:"20px"}}>
            <TransactionTable/>
            </div>
        </div>
    )
}