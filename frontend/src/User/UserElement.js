import './Style.css'
export default function UserElement({
    name,
    email,
    index,
    id
}){
    return(
        <div className="userResult">
                <div className='user'> {index}</div> 
                 <div className='user'> {name}</div>
                {/* <div className="user"> {email}</div> */}
        </div>
    )


}