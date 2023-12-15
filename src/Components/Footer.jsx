

export const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		
		<footer
		
			className="footer footer-center p-1 text-primary-content"
			style={{
				borderRadius: '39px',
				background: '#00c3ff',
				marginTop: '220px',
			}}
		>
			
			<aside>
				<p style={{ fontSize: '16px' }} className="font-bold">
					SaleforceHub <br />
					Providing reliable tech since 2023
				</p>
				<p>Copyright © 2023 - All right reserved</p>
				<a className="font-bold" href="#top" onClick={scrollToTop} >
        			Back to Top
      			</a>
			</aside>	
			
		</footer>
	);
};
