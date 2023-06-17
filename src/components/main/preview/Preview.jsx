import styles from './Preview.module.scss'

export const Preview = () => {
	return (
		<div className={styles.preview}>
			<div className='main__container'>
				<div className={styles.text}>
					<h5 id='Main_h' className='Main_h'>
						Flash Gaming
					</h5>
					<p id='Main_p'>Какой-нибудь очень громкий девиз, даже ещё громче</p>
				</div>
			</div>
		</div>
	)
}
