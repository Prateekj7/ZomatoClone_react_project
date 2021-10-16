import React from "react"
import ClassAjax from "./ClassAjax"


export default class ComponenentCall extends React.Component<{}, {}> {
    public render(): JSX.Element{
        return(
        <>
            <div>Ajax API Call</div>
            <ClassAjax />
        </>
        )
    }
}