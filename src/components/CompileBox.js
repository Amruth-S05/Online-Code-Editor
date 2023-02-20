import React from "react";

const CompileBox = () => {
	return (
		<div className="compile-box">
			<div className="input-box">
				<textarea name="user-input" id="user-input" cols="85" rows="10" />
			</div>
			<div className="output-box">
				<textarea name="user-output" id="user-output" cols="85" rows="10" />
			</div>
		</div>
	);
};

export default CompileBox;
