import SocialIcons from "./components/SocialIcons";
import {companyName,doMath,students}  from "./components/Users";
import ChildOfChild from "./ChildOfChild";


function ChildComponent ({name}) {
    // define a variable
    const companyName = "Google";
    const getSumResult = 5+7
    function getSum(a,b) {
        return a + b
    }
    const printName = name => name.toUpperCase()
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    const [a,b,c,d] = ['Joe','Jane','June','Jim'];
    const myComponentStyle = {'color':'blue','fontSize': '90px', 'fontWeight':'bold'}
    return (
        <div>
            <h1>Hello Hello</h1>
            {/* {alert('hello')} */}
            {5+5}
            <h1>{companyName}</h1>
            <h1>{getSumResult}</h1>
            <h2>
            {getSum(2,3)}
            {printName("Hande")}
            {"Mike".toUpperCase()}
            {console.log(companyName)}
            {/* <h1>{numbers.map(number=> <h2>{number}</h2>)}</h1> */}
            </h2>
            <h3>{a},{b},{c},{d}</h3>
            {/* {console.log(Users)} */}
            {
            //iterate through an array
            students.map(a=> { 
                
            return (

            a === 'James' ? <h1>Hello,James</h1> : <h1>Hello,Visitor</h1>
            )
             
            })
            }

            <h1 style={myComponentStyle}>{companyName}</h1>
            {
                false ? <h1>Hello</h1> : <h1>Goodbye</h1>
            }

            {
                [...[1,2,3,4]]
            }
            {name}
            <ChildOfChild newName={name}/>
        </div>
    )
}

export default ChildComponent;