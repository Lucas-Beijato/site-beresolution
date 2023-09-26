"use client"
import Script from "next/script"

export default function RdStationFormScript() {

  return (
    <>
      <div role="main" id="form-briefing-desenvolvimento-1e59238d9ca960ac0f6e"/>
      <Script
        id="rdScriptLib"
        strategy="afterInteractive"
        src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
        onReady={() => {
          // Função será carregada externamente, então precisa ignorar o erro da função RDStationForms
          // @ts-ignore
          new RDStationForms('form-briefing-desenvolvimento-1e59238d9ca960ac0f6e', 'UA-256038179-1').createForm();
        }}
      />
    </>
  )
}
