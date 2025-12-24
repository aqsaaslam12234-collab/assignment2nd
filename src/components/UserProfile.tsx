export default function UserProfile() {
  return (
    <div className="min-h-screen w-full p-4 flex bg-gradient-to-br from-teal-800 to-teal-400  items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md  w-full">
        <div className="flex items-center gap-6">
          <div className="relative  flex">
            <div className="size-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1701096374092-bb70915fdc5c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Imang not found"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute bg-white -bottom-1 -right-1 rounded-full p-1">
              <div className="text-blue-500 size-8 fill-blue-500"></div>
            </div>
            <div className="fiex-1">
              <h1 className="text-4xl ml-5 mt-5 font-bold text-teal-400 mb-1">
                Hadia Hasan
              </h1>
              <p className="text-xl text-gray-500 font-medium">Website Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
