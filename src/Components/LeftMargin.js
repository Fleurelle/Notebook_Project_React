import React from 'react'

const BarStyle = {
    marginTop: '-870px',
    marginLeft: '5px',
}

class LeftMargin extends React.Component {
    render(){
        return(
            <div>
                <div className="seach_bar">
                    <form style= {BarStyle}>
                        <input type="text" />
                        <input type="submit" value="SUBMIT"/>
                    </form>
                </div>
            </div>
        )
    }
}
export default LeftMargin