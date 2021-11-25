import { withPrettyTime } from "./HOC";
import DateTime from './DateTime';

const DateTimePretty = withPrettyTime(DateTime);

function Video(props) {
	return (
			<div className="video">
					<iframe src={props.url} title="iframe" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
					<DateTimePretty date={props.date} />
			</div>
	)
}

export default Video;