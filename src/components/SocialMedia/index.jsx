import React from "react";

import {
	Button,
	Icon,
	Grid
} from 'semantic-ui-react';

export default ({name, color, icon, url}, i) => (
	<Grid.Column stretched key={i}>
		<Button as='a' href={url} target='_blank' animated='fade' color={color} inverted size={'massive'} circular>
			<Button.Content visible>
				<Icon name={icon} />
			</Button.Content>
			<Button.Content hidden style={{fontSize: "81%", lineHeight: "1em"}}>
				{name}
			</Button.Content>
		</Button>
	</Grid.Column>

)
