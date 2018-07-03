import React from "react";

import {
	Button,
	Grid,
	Responsive
} from 'semantic-ui-react';

export default ({name, color, url}, i) => (
	<Grid.Column stretched key={i}>
		<Button as='a' href={url} target='_blank' animated='fade' color={color} inverted size={'massive'} circular>
			<Button.Content visible>
				<Responsive {...Responsive.onlyMobile}>
					#{i}
				</Responsive>
				<Responsive minWidth={Responsive.onlyTablet.minWidth}>
					Work Sample #{i}
				</Responsive>
			</Button.Content>
			<Button.Content hidden style={{fontSize: "81%", lineHeight: "1em"}}>
				{name}
			</Button.Content>
		</Button>
	</Grid.Column>

)
