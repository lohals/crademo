export class ShadowDomContainerExposingStyleInsertionPointAndSpaRoot extends HTMLElement {
  // don't understand why we have to have this reference internally (we can call it whatever)
  // since HTMLElement already exposes a general shadowRoot property, that will also hold reference to the same node it seems
  // anyway, removing an internal field reference stops the shadow dom from working
  private InternalRootReference: ShadowRoot;

  public SpaRoot: Readonly<HTMLElement>;
  public JssStylesInsertionPoint: Readonly<HTMLElement>;

  constructor() {
    super();
    this.InternalRootReference = this.attachShadow({ mode: "open" });

    // add jss styles insertion point
    this.JssStylesInsertionPoint = document.createElement("noscript");
    this.JssStylesInsertionPoint.setAttribute(
      "id",
      "jss-styles-insertion-point"
    );
    this.InternalRootReference.appendChild(this.JssStylesInsertionPoint);

    // add mount root for SPA
    this.SpaRoot = document.createElement("div");
    this.SpaRoot.setAttribute("id", "spa-root");
    this.InternalRootReference.appendChild(this.SpaRoot);
  }
}

export class ShadowDomContainerExposingStyleInsertionPointAndSpaRoot2 extends HTMLElement {
  // don't understand why we have to have this reference internally (we can call it whatever)
  // since HTMLElement already exposes a general shadowRoot property, that will also hold reference to the same node it seems
  // anyway, removing an internal field reference stops the shadow dom from working
  private InternalRootReference: ShadowRoot;

  public SpaRoot: Readonly<HTMLElement>;
  public JssStylesInsertionPoint: Readonly<HTMLElement>;

  constructor() {
    super();
    this.InternalRootReference = this.attachShadow({ mode: "open" });

    // add jss styles insertion point
    this.JssStylesInsertionPoint = document.createElement("noscript");
    this.JssStylesInsertionPoint.setAttribute(
      "id",
      "jss-styles-insertion-point2"
    );
    this.InternalRootReference.appendChild(this.JssStylesInsertionPoint);

    // add mount root for SPA
    this.SpaRoot = document.createElement("div");
    this.SpaRoot.setAttribute("id", "spa-root");
    this.InternalRootReference.appendChild(this.SpaRoot);
  }
}
