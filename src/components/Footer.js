import Logo from '../images/gh.png'

const Footer = () => {
    return(
        <div className="blendverse-container my-12">
            <div className="flex items-center">
                <img src={Logo} className="h-5 w-5 mr-3" alt="github logo" />
                <a 
                    href="https://github.com/lissomliksom/dnd-campaign-planner-react" 
                    className="text-sm text-gray-500 hover:text-gray-900">
                        Repo on Github
                    </a>
            </div>
        </div>
    )
}

export default Footer