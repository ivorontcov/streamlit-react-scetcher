import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import { StructureEditor } from "react-ocl/full"
import React, { ReactNode } from "react"

interface State {
  smiles: string
}

const molFileDefault = `
Actelion Java MolfileCreator 1.0

6  5  0  0  0  0  0  0  0  0999 V2000
3.4641   -0.5000   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
2.5981   -0.0000   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
1.7321   -0.5000   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
1.7321   -1.5000   -0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
0.8660   -0.0000   -0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0
0.0000   -0.5000   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
2  1  1  0  0  0  0
3  2  1  0  0  0  0
4  3  2  0  0  0  0
5  3  1  0  0  0  0
6  5  1  0  0  0  0
M  END
`

class ReactEditor extends StreamlitComponentBase<State> {
  public state = { numClicks: 0, isFocused: false, smiles: "COCCOOOCO" }

  public render = (): ReactNode => {
    return (
      <StructureEditor
        initialMolfile={molFileDefault}
        onChange={function noRefCheck() {}}
        svgMenu
      />
    )
  }
}
export default withStreamlitConnection(ReactEditor)
