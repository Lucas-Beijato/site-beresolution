import Script from "next/script"

const RdStationForm = () => {
  return (
    <>
      <div role="main" id="form-briefing-desenvolvimento-1e59238d9ca960ac0f6e"></div>
      <Script strategy="afterInteractive" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></Script>
      <Script id="rdScript" strategy="lazyOnload">{`new RDStationForms('form-briefing-desenvolvimento-1e59238d9ca960ac0f6e', 'UA-256038179-1').createForm();`}</Script>
    </>
  )
}

export default RdStationForm
