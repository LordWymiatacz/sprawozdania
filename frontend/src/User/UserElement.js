import './Style.css'
export default function UserElement({
    name,
    email,
    index,
    id,
    logged
}){
    return(
        <div className="userResult">
                <div className='user'> {index}</div> 
                 {logged?<div className='user'> {name}</div>:''}
                {/* <div className="user"> {email}</div> */}
        </div>
    )


}