//THIS MAY NOT BE NEEDED. ITS SOLE PURPOSE WAS FOR THE FORM'S TITLE AND HEADER. 
import React from 'react'

const formStyling = {
    marginTop: '15px'
}
class NotepadItems extends React.Component{
    render(){
        return(
            <div>
                <form style={formStyling}>
                    <input type="text" placeholder="TITLE"/>
                    <input type="text" placeholder="DATE"/>
                </form>
            </div>
        )
    }
}
export default NotepadItems