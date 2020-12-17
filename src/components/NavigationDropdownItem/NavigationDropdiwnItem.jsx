import { MDBDropdownItem } from "mdbreact";

const NavigationDropdownItem = items =>{
    return (items.array.map((el, key)=>{
        return (
            <MDBDropdownItem key={key}>
                {el}
            </MDBDropdownItem>
        )
    }))
    
}

export default NavigationDropdownItem;