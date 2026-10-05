export default function PrivacyPolicy({ onBack }: { onBack: () => void }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x max-w-3xl">
        <button
          onClick={onBack}
          className="text-sm font-extrabold uppercase tracking-wider text-brand transition-colors hover:text-brand-dark"
        >
          ← Back to home
        </button>
        <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
          Privacy &amp; Policy
        </h1>
        <div className="mt-10 space-y-8 leading-relaxed text-cocoa">
          <p>
            Daddy's Cake Pvt. Ltd. operates the ‘Daddy's Cake’ app (both in Google Play Store and
            Apple App Store) and its website, which provides the service. This page is used to
            inform app and website users regarding our policies with the collection, use, and
            disclosure of Personal Information if anyone decided to use our service. If you choose to
            use our service, then you agree to the collection and use of information in relation with
            this policy. The personal information that we collect are used for providing and
            improving the service. We will not use or share your information with anyone except as
            described in this Privacy Policy. The terms used in this Privacy Policy have the same
            meanings as in our Terms of Use, which is accessible at our Terms of Use page, unless
            otherwise defined in this Privacy Policy.
          </p>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Information Collection and Use</h2>
            <p className="mt-3">
              We may require you to provide us with certain personally identifiable information,
              including but not limited to your name, phone number, email and postal address. The
              information that we collect will be used to contact or identify you. The information
              we collect are used to contact or identify you, process the orders. We may use the
              user's e-mail address to convey occasional newsletters and updates, specials offer on
              our platforms and other useful information related to our service. We also log and
              store users' IP addresses, cookie information and the information about the users'
              website experience, preferences and the pages they request.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Log Data</h2>
            <p className="mt-3">
              We want to inform you that whenever you use our app or website, we collect information
              that app sends to us that is called Log Data. This Log Data may include information
              such as your computer’s Internet Protocol (“IP”) address, app version, screens of our
              service that you access, the time and date of your access, the time spent on those
              screens, and other statistics.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Service Providers</h2>
            <p className="mt-3">
              We may employ third-party companies and individuals due to the following reasons: To
              facilitate our service; To provide the service on our behalf; To perform
              servicerelated services; or To assist us in analysing how our service is used. We want
              to inform our service users that in certain situations, we may need to give access to
              your Personal Information to these third parties. The reason is to perform the tasks
              assigned to them on our behalf. However, they are obligated not to disclose or use the
              information for any other purpose.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Security</h2>
            <p className="mt-3">
              We value your trust in providing us your Personal Information, thus we are striving to
              use commercially acceptable means of protecting it. But remember that no method of
              transmission over the Internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Links to Other Sites</h2>
            <p className="mt-3">
              Our service may contain links to other sites/apps. If you click on a third-party link,
              you will be directed to that site/app. Note that we do not operate these external
              sites/apps. Therefore, we strongly advise you to review the Privacy Policy of these
              websites and apps. We have no control over, and assume no responsibility for the
              content, privacy policies, or practices of any third-party sites, apps or services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Changes to This Privacy Policy
            </h2>
            <p className="mt-3">
              We may update our Privacy Policy from time to time. Thus, we advise you to review this
              page periodically for any changes. We will notify you of any changes by posting the new
              Privacy Policy on this page. These changes are effective immediately, after they are
              posted on this page.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Contact Us</h2>
            <p className="mt-3">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to
              contact us at daddysservice@gmail.com or 980-2672008.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
