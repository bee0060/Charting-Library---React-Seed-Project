//components
import OverlayMenu from './OverlayMenu';
import StudyModal from '../Modals/StudyModal/StudyModal';
import MenuSelect from './MenuSelect';

const StudyUI = (props) => {
	let tempStudies = [];

	Object.keys(props.studyList).map((key) => {
		if (props.studyList.hasOwnProperty(key)){
			tempStudies.push(props.studyList[key]);
		}
	});

	tempStudies.sort((a, b) => {
		if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
		else if (b.name.toLowerCase() > a.name.toLowerCase()) { return -1; }
		else { return 0; }
	});

	props.ciq.callbacks.studyOverlayEdit = props.toggleOverlay;
	props.ciq.callbacks.studyPanelEdit = props.openStudyModal;

	return (
		<span>
			<OverlayMenu {...props} />
			<StudyModal {...props} />

			<MenuSelect options={tempStudies} keyName='study' name='name' handleOptionSelect={props.addStudy} needsCiq={true} ciq={props.ciq} menuId='studySelect' title='Studies' />
		</span>
	);
}

export default StudyUI