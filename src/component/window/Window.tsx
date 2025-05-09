import { type FC } from 'react';
import './Window.css'
const Window: FC = () => {
    return (
        <><div className="window">
            <div className="content">
                <div className="shine"></div>
                <div className="rain">
                    <div className="dropletOne"></div>
                    <div className="dropletTwo"></div>
                    <div className="dropletThree"></div>
                    <div className="dropletFour"></div>
                    <div className="dropletFive"></div>
                </div>
                <div className="tree-container">
                    <div className="tree">

                    </div>
                    <div className="tree">
                    </div>
                    <div className="tree">
                    </div>
                    <div className="tree">
                    </div>
                    <div className="tree">
                    </div>
                    <div className="tree">
                    </div>

                    <div className="tree">
                    </div>
                </div>


            </div>
        </div></>
    );
}

export default Window;
