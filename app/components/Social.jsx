import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const socials = [
    { icon: <FaGithub/>, path: "https://github.com/xliveirx"},
    { icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/jo%C3%A3o-oliveira-3411ab327/"},
    { icon: <FaInstagram/>, path: "https://instagram.com/xliveirx"}
]

const Social = ({ containerStyle, iconStyles }) => {
    return(
        <div className={containerStyle}>
            {socials.map((social, index) => {
                return <Link href={social.path} key={index} className={iconStyles}>
                    {social.icon}
                </Link>
            })}
        </div>
    )
}

export default Social;