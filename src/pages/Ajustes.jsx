function Ajustes(){
    return (
        <>
        <h1 className="font-bold text-xl">Configuracion del Sistema</h1>
        <p className="text-base text-gray-700">Administra la preferencias de tu cuenta y la apariencia visual</p>
        <br />
        <form action="">
            <section className="border border-slate-200 rounded-lg overflow-hidden">
                <h2 className="p-2 bg-slate-200">Informacion del perfil</h2>
                <div className="px-2 py-4 flex items-center gap-4">
                    <img className="w-20 rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" alt="ImagenAvatar" />
                    <div>
                        <p className="font-semibold">Nombre de usuario</p>
                        <span className="text-sm text-gray-400">usuario.j@gmail.com</span>
                        <button className="block px-4 py-0.5 text-sm my-2 rounded-lg bg-slate-300">Change Avatar</button>
                    </div>
                </div>
                
                <div className="p-2 flex items-center gap-4">
                    <div className="flex-1">
                        <label className="block font-semibold" htmlFor="NombreUsuario">Nombre Usuario:</label>
                        <input className="block border-none w-full mt-2 p-1 rounded-lg bg-slate-200" type="text" placeholder="Usuario"/>
                    </div>

                    <div className="flex-1">
                        <label className="block font-semibold" htmlFor="CorreoElectronico">Correo Electronico:</label>
                        <input className="block border-none w-full mt-2 p-1 rounded-lg bg-slate-200" type="email" placeholder="usuario.j@gmail.com"/>
                    </div>
                </div>
            </section>

            <br />
            <section className="border border-slate-200 rounded-lg overflow-hidden">
                <h2 className="p-2 bg-slate-200">Appariencia</h2>
                <p className="text-base text-gray-700">Personaliza el tema de la interfaz</p>

                <div className="p-4 grid grid-cols-3 gap-4">
                    <div className="border border-slate-200 rounded-lg p-2 text-center cursor-pointer">
                        <p>Light</p>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-2 text-center bg-black text-white cursor-pointer">
                        <p>Dark</p>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-2 text-center bg-slate-400 text-white cursor-pointer">
                        <p>System</p>
                    </div>
                </div>
            </section>

            <button className="px-4 py-2 bg-slate-300 rounded-lg">Guardar Cambios</button>

        </form>
        </>
    )
}

export default Ajustes;