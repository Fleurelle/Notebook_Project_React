import React from 'react'

const BarStyle = {
    marginTop: '-870px',
    marginLeft: '5px',
}

const deleteBtnStyle = {
    padding: 0,
    background: 'none',
    marginLeft: '150px',
    background: 'pink'
}

class Notes extends React.Component {
    render() {
        return (
            <div>
                <div className="seach_bar">
                    <form style={BarStyle}>
                        <input type="text" placeholder="Search..." />
                        <input type="submit" value="Search" />
                    </form>
                </div>
                {/* Don't forget to add hover effect so it may look like a sticky note */}
                <div className="accrued-notes">
                    <h3>NOTES:</h3>

                </div>
            </div>
        )
    }
}
export default Notes

