import { extend, override } from 'flarum/common/extend';
import ForumApplication from 'flarum/forum/ForumApplication';
type feApp = (
  provider: string,
  name: string,
  getProviderData: (providerDatas: { [key: string]: string }) => Promise<void>,
  getShowCase: (item: any, purchase_history?: any) => any,
  getUseData: (item: any) => Promise<string>
) => void;
export function storeBox(app: ForumApplication) {
  (flarum.extensions['xypp-store'].addFrontendProviders as feApp)(
    "sticky-card", app.translator.trans("xypp-sticky-card.forum.sticky-card") as string,
    async function getProviderData(providerDatas) {
      providerDatas['default'] = app.translator.trans("xypp-sticky-card.forum.default") as string
    },
    function createItemShowCase(item, purchase_history) {
      return (
        <div style="text-align:center;">
          <br></br>
          <p><i class="fas fa-hand-point-up"></i></p>
          <p>{purchase_history?.attribute("data")?.usedOn ?
            app.translator.trans("xypp-sticky-card.forum.used", [purchase_history?.attribute("data")?.usedOn] as any) :
            app.translator.trans("xypp-sticky-card.forum.not-used")}</p>
        </div>
      );
    },
    async function (str): Promise<string> {
      return "";
    }
  )
}
