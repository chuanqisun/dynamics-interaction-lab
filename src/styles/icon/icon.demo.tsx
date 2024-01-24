import * as React from "react";
import { FullMdl2 } from "./full-mdl2";

const FullMdl2Keys = Object.keys(FullMdl2);

export class IconDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      iconName: "Emoji2",
    };
  }

  onHexChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ iconName: (event.target as HTMLInputElement).value });
  };

  getMatchingOptions = (query: string) => {
    const upperCaseQuery = query.toLocaleUpperCase();
    return query && query.length > 2 ? FullMdl2Keys.filter((key) => key.toUpperCase().includes(upperCaseQuery)) : [];
  };

  render() {
    return (
      <React.Fragment>
        <section>
          <h2 className="lab-demo-h2">Sample</h2>
          <div className="mdl2">{(FullMdl2 as any)[this.state.iconName]}</div>
        </section>
        <section>
          <h2 className="lab-demo-h2">Usage</h2>
          <ul>
            <li>
              Include <code>full-mdl2.css</code> in your project
            </li>
            <li>
              Find the name for your icon in the Full MDL2 Asset. We recommend using <a href="https://fabricicon.azurewebsites.net">fabricicon</a>.
            </li>
            <li>
              Import the icon constant{" "}
              <code>
                import {"{"}FullMDL2{"}"} from 'styles/icon/full-mdl2';
              </code>
            </li>
            <li>
              Get the glyph from the constant in your html or jsx. In this demo, we use{" "}
              <input type="text" value={this.state.iconName} onChange={this.onHexChange} list="exampleList"></input>
            </li>
            <datalist id="exampleList">
              {this.getMatchingOptions(this.state.iconName).map((key) => (
                <option key={key} value={key} />
              ))}
            </datalist>
            <li>
              Code <code>{`<div style="font-family: var(--ff-mdl2)">{FullDML2.${this.state.iconName}}</div>`}</code>
            </li>
            <li>
              Or code <code>{`<div class="mdl2">{FullDML2.${this.state.iconName}}</div>`}</code>
            </li>
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

export default IconDemo;
