const layout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <div className="min-h-screen w-full flex-center  bg-dotted-pattern bg-primary-50 bg-cover bg-fixed bg-center">
            {children}
        </div>
     );
}
 
export default layout;