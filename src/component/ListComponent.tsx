import React from 'react'
import './style.css';

function ListComponent(props) {

	const { data } = props;

	return (
		<div>
			{Object.entries(data).map(([key, articles]) => (
				<div key={key} className='news-container'>
					<div className='news-container-heading'>
						<p>{`Published at : ${key}`}</p>
						<p>{`Count of entries :  ${articles.length}`}</p>
					</div>
					<ul style={{ listStyleType: 'none', padding: 0 }}>
						{articles && articles?.map((article, index) => (
							<>
								<hr />
								<li key={index} style={{ marginBottom: '10px' }}>
									<p className='news-title{'>{article.title}</p>
									<p className='news-description'>{article.description}</p>
									<p><small>Published on: {new Date(article.publishedAt).toLocaleString()}</small></p>
								</li>
							</>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}

export default ListComponent;