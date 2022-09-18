import OCL from "openchemlib/minimal"
import { StructureEditor } from "react-ocl/full"
import { Streamlit } from "streamlit-component-lib"
import { useRenderData } from "streamlit-component-lib-react-hooks"
import React, { useState, useEffect } from "react"

/**
 * This is a React-based component template with functional component and hooks.
 */
const ReactEditor: React.VFC = () => {
  // "useRenderData" returns the renderData passed from Python.
  const renderData = useRenderData()

  const [smiles, setSmiles] = useState("")
  const [molFile, setMolFile] = useState("")

  useEffect(() => {
    const _smiles = renderData.args.smiles

    if (_smiles) {
      setSmiles(_smiles)

      const _molFile = OCL.Molecule.fromSmiles(_smiles).toMolfileV3()
      setMolFile(_molFile)

      Streamlit.setComponentValue(_smiles)
    }
  }, [renderData.args.smiles])

  // @HACK: check related thread on Github:
  // https://github.com/zakodium-oss/react-ocl/issues/17#issuecomment-1250199318
  const key = Math.random();

  return (
    <>
      <StructureEditor
        key={key}
        initialMolfile={molFile}
        onChange={newMolFile => {
          setMolFile(newMolFile);
          const newSmiles = OCL.Molecule.fromMolfile(newMolFile).toSmiles();
          Streamlit.setComponentValue(newSmiles)
        }}
        svgMenu
      />
    </>
  )
}

export default ReactEditor
