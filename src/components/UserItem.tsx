import { user } from "@/data/data";

const UserItem = () => {

    const userName = user[0].name;

    return (
        <div>
            <h1 className="text-2xl text-white/90 font-semibold">
                Bienvenido {userName} 👋
            </h1>
        </div>
    )
}

export default UserItem
