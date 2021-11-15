const Navbar = () => {
    return (
        <div className="shadow-lg">
            <div className="max-w-[1184px] m-auto py-4 ">

                <div className="flex items-center">
                    <img src="assets/img/logo.svg" alt="logo" />

                    <div class="relative flex-1 ml-6 text-gray-700 focus-within:text-gray-400">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                <img src="assets/img/search.svg" alt="search" />
                            </button>
                        </span>
                        <input type="search" name="q" class="py-2 w-full text-md bg-gray-100 rounded-md pl-10 focus:outline-none focus:bg-white focus:border focus:border-gray-700 " placeholder="letgo'da ara" autocomplete="off" />
                    </div>

                    <button type="button" className="flex h-9 items-center ml-4 px-5 py-1 rounded-3xl text-white font-bold bg-primary-color">
                        <img src="assets/img/camera.svg" className="w-5 h-5 mr-1" alt="camera" />
                        Sat
                    </button>

                    <button type="button" className="ml-3 hover:bg-gray-100 transition-all rounded-full p-2">
                        <img src="assets/img/chat.svg" className="w-6 h-6" alt="chat" />
                    </button>

                    <button type="button" className="ml-2 hover:bg-gray-100 transition-all rounded-full p-2">
                        <img src="assets/img/bell.svg" className="w-6 h-6" alt="bell" />
                    </button>

                    <button type="button" className="ml-2 ">
                        <img
                            src="https://avatars.letgo.com/images/0b/27/1a/b9/0b271ab9677e2d36457b05ed41c6494edcd3c4e2.jpg.jpeg?versionId=y4kbfGpq_oY1FL6apm2gVtnfGWmXCqDY&impolicy=img_110"
                            className="w-10 h-10 rounded-full" alt="profile" />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Navbar;