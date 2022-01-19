import styles from './Nav.module.scss'

export const Nav = links => {
	console.log(links);
	return (
		<nav>
          <ul>
            {links.data.map((link,id) => {
              return (
                <li key={id}><a href="#">{link}</a></li>
              )
            })}
              
          </ul>
        </nav>
	)
}