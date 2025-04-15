import TextUpdater from "./components/TextUpdater";
import TextForm from "./components/TextForm";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6">
      <div className="max-w-3xl mx-auto space-y-10">

        <header className="text-center border-b-2 border-blue-500 pb-4">
          <h1 className="text-4xl yeseva-font text-blue-700">
            React.js Assignment
          </h1>


          <p className="text-gray-600 mt-1">By K. Sasi Kumar</p>
        </header>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">1. Text Updater</h2>
          <TextUpdater />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">2. Submit Form</h2>
          <TextForm />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">3. User Card</h2>
          <UserCard
            name="G.Mourya"
            email="gunupurumourya2022@vitbhopal.ac.in"
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">4. Button Click</h2>
          <Button />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">5. Login Form</h2>
          <LoginForm />
        </section>

        <footer className="text-right text-sm text-gray-500 pt-8 border-t">
          &copy; 2025 G.Mourya | VIT Bhopal
        </footer>

      </div>
    </div>
  );
}

export default App;
