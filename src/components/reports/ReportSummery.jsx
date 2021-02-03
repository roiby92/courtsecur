import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
const ReportSummery = (props) => {

    const { open, handleClose, report } = props

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{report.name}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    סוג אירוע :
                    <p>{report.type}</p>
                    מיקום האירוע :
                    <p>{report.location}</p>
                    תאריך האירוע : 
                    <p>{report.date}</p>
                    אחראי משמרת :
                    <p>{report.shiftHead}</p>
                    משתתפים : 
                    <ul>
                        {report.participants ? report.participants.map(p => <li>{p}</li>) : null}
                    </ul>
                    תיאור האירוע : 
                    <p>{report.discription}</p>
                    סיכום האירוע : 
                    <p>{report.summary}</p>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose()} color="primary" autoFocus>
                    חזור לתפריט דוחות אירוע
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ReportSummery
