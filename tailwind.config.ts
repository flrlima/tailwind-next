import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			gridTemplateColumns: {
				app: 'minmax(18rem, 20rem) 1fr',
				// temos a definição de 3 colunas 1, e 3 ->minimo do content, coluna 2 vai crescer ou diminuir
				profile: '3rem 1fr 1rem',
				form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
			},
			maxWidth: {
				app: '700px',
			},
			border: {
				6: '6px',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				violet: {
					25: '#fcfaff'
				}
				// panapoo_roxo: '#8257e6',
			},
		},
	},
	plugins: [],
}
export default config
