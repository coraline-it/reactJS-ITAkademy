import { TodoListHeader } from '../components/todolist/TodoListHeader';
import { TodoListBody } from "../components/todolist/TodoListBody";
import { Layout } from '../layouts/Layout';


const Todolist = () => (
    <div className="Home">
      <Layout>
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        La liste de mes tâches 👻
      </h1>
        <div>
          <TodoListBody />
        </div>
      </Layout>
    </div>
    );

    export default Todolist;