import React from 'react';
import { css } from '@emotion/css';
import { TCanvas } from './components/TCanvas';




export const App = () => {
	return (
		<div className={styles.container}>

			<TCanvas />
		</div>
	)
}

const styles = {
	container: css`
		position: relative;
		width: 100vw;
		height: 100vh;
	`
}
