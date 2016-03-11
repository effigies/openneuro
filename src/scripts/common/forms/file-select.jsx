// dependencies -------------------------------------------------------

import React     from 'react';
import fileUtils from '../../utils/files';

class Upload extends React.Component {

// life cycle events --------------------------------------------------

	componentDidMount () {
		this.refs.fileSelect.getDOMNode().setAttribute('webkitdirectory', true);
		this.refs.fileSelect.getDOMNode().setAttribute('directory', true);
		this._setRefs(this.refs);
	}

	render () {
		let text = this.props.resume ? "Resume" : "Select folder";
		return (
			<div className="fileupload-btn">
				<span>{text}</span>
				<input type="file"  className="dirUpload-btn" onClick={this._click.bind(this)} onChange={this._onFileSelect.bind(this)} ref="fileSelect"/>
    		</div>
    	);
	}

// custom methods -----------------------------------------------------

	_click (e) {
		React.findDOMNode(this.refs.fileSelect).value = null;
		if (this.props.onClick) {this.props.onClick(e);}
	}

	_onFileSelect (e) {
		if (e.target && e.target.files.length > 0) {
			let files   = e.target.files;
	        let dirTree = fileUtils.generateTree(files);
	        let results = {tree: dirTree, list: files};
			this.props.onChange(results);
		}
	}

	_setRefs (refs) {
		if (this.props.setRefs) {
			this.props.setRefs(refs);
		}
	}

}

export default Upload;