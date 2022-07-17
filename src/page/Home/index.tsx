import userUserStore from '../../stores/user'
const Home = () => {

    const users = userUserStore (state => state.users);

    return (
        <div>
            {users?.map((user) => ( 
                <p key={Math.random()}>{user.name} | {user.email}</p>
            ))}
        </div>  
    );
}

export default Home;