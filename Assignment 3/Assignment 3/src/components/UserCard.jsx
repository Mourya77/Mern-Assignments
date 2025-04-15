function UserCard({ name, email }) {
  return (
    <div className="bg-white p-6 rounded shadow-md text-left">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
    </div>
  );
}

export default UserCard;
