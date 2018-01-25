import React, {PureComponent} from "react";

import styled from 'styled-components';

import {FooterContainer} from 'utils/Layout';

import {
	BASIC as basic,
	REFERENCES as references,
	LICENSE as license
} from 'resume';

const StyledFooter = styled(FooterContainer)`
  line-height: 24px;
	width: 100vw;
  color: white;
  font-size: 1em;
  text-align: center;
	padding: 1.8em;
`;

export default class Footer extends PureComponent {
	render() {
		return (
			<StyledFooter id="Copyright">
				<p>
					This site was developed with
					{
						references.map(({name, url}, i) =>
							<span key={i}>
								<a rel="noopener noreferrer" href={url} target='_blank'>{` ${name}`}</a>{', '}
							</span>
						)
					}
					by <br/>
					<a rel="noopener noreferrer" href={basic.url} target='_blank'>{` ${basic.name} `}</a>
					and is licensed under the <br/>
					<a className="rainbow mobile" style={{color: 'white'}} rel="noopener noreferrer" target='_blank'
						href={license.url}>
						{license.name}
					</a>
				</p>
			</StyledFooter>
		);
	}
}
