import { connect } from 'react-redux';
import Footer from '../../components/layout/Footer';
import { IPayload } from '../reducers/themeReducers';
import { saveTheme } from '../actions/changeThemeAction';

const mapDispatchToProps = (dispatch: any) => ({
	dispatch,
	saveColorTheme: (color: string) => dispatch(saveTheme(color)),
});

function mapStateToProps(state: IPayload) {
	return {
		themeColor: state.color,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
