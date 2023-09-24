import React from "react";
import './sphere-class.scss';

import { SphereConst } from "../sphere/sphere.const";

type SphereClassProps = {
    isSpin: boolean,
}

export class SphereClass extends React.Component<SphereClassProps> {
    sphere: JSX.Element[];
    dots: JSX.Element[];

    constructor(props: SphereClassProps) {
        super(props);

        this.dots = [...Array(SphereConst.dotInLine).keys()].map(el => {
            return (
                <div
                    key={el}
                    className='sphere-class__wrap__line__dot'
                    style={{ transform: `rotateX(${el * (SphereConst.deg / SphereConst.dotInLine)}deg) translateZ(${SphereConst.radius}px)` }}
                />
            );
        });

        this.sphere = [...Array(SphereConst.linesInSphere).keys()].map(el => {
            return (
                <div
                    key={el}
                    className='sphere-class__wrap__line'
                    style={{ transform: `rotateY(${el * (SphereConst.deg / SphereConst.linesInSphere)}deg)` }}
                >
                    {this.dots}
                </div>
            );
        });
    }

    render() {
        return (
            <div className='sphere-class'>
                <h3 className="sphere-class__title">CSS 3d transform + JS</h3>
                <div className='sphere-class__wrap'
                    style={{ animationPlayState: this.props.isSpin ? 'running' : 'paused' }}>
                    {this.sphere}
                </div>
            </div>
        )
    }
}