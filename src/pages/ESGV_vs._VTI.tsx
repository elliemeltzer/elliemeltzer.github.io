import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ESGVvsVTIResearch() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <Link to="/research">
            <Button variant="ghost" className="mb-6">
              ← Back to Research
            </Button>
          </Link>

          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
            INVESTING RESEARCH
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
            ESGV vs. VTI
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
            Comparative analysis of an ESG-screened ETF (ESGV) versus a total market ETF (VTI),
            focusing on performance, drawdowns, and factor exposure.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span>
              <span className="font-semibold text-gray-800">Published:</span> January 2026
            </span>
            <span className="text-gray-400">•</span>
            <span>
              <span className="font-semibold text-gray-800">Author:</span> Eleanor Meltzer
            </span>
            <span className="text-gray-400">•</span>
            <span>
              <span className="font-semibold text-gray-800">Tools:</span> Python, pandas, matplotlib
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["ESG", "ETFs", "Risk/Return", "Drawdowns", "Factor Exposure"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="space-y-8">
          {/* ABSTRACT */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Abstract</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-gray-700">
                This project compares ESGV and VTI to understand how ESG screening may influence
                portfolio outcomes. Using daily price data, I evaluate cumulative performance,
                drawdowns (downside risk), and factor exposure to interpret what trade-offs (if any)
                appear when choosing an ESG-screened index fund.
              </p>
            </CardContent>
          </Card>

          {/* RESEARCH QUESTIONS */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Research Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>How does ESGV’s cumulative performance compare to VTI over the same period?</li>
                <li>Which ETF experiences deeper or longer drawdowns?</li>
                <li>Do factor exposures help explain the differences (if any)?</li>
              </ul>
            </CardContent>
          </Card>

          {/* METHODOLOGY */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Methodology</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>Collect adjusted close price history for ESGV and VTI.</li>
                <li>Compute returns and cumulative growth.</li>
                <li>Compute drawdowns to evaluate downside risk.</li>
                <li>Estimate factor exposure and compare differences.</li>
              </ol>
            </CardContent>
          </Card>

          {/* RESULTS */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Results</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Cumulative Performance */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Cumulative Performance
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Growth of $1 invested in ESGV vs VTI over the sample period.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                  {/* LEFT: Chart */}
                  <div className="lg:col-span-2 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                    <img
                      src="/plots/ESGV_v_VTI_Cumulartive_Performance.png"
                      alt="Cumulative performance chart for ESGV vs VTI"
                      className="block w-full h-auto"
                      loading="lazy"
                    />
                  </div>

                  {/* RIGHT: Explanation */}
                  <div className="space-y-3 text-sm text-gray-700 lg:border-l lg:border-gray-200 lg:pl-4">
                    <h4 className="text-base font-semibold text-gray-900">
                      Interpretation
                    </h4>

                    <p>
                      This chart shows the cumulative <span className="font-medium">relative</span> performance of ESGV compared to VTI.
                      Values above <span className="font-medium">1.0</span> indicate periods where ESGV outperformed; values below indicate underperformance.
                    </p>

                    <p>
                      Over most of the sample, ESGV tracks VTI closely, suggesting ESG screening changes returns only modestly relative to a broad-market benchmark.
                    </p>
                  </div>
                </div>
              </div>

              {/* Drawdowns */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Drawdowns / Downside Risk
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Drawdown curves illustrate how far each fund falls from its most recent high and how quickly losses accumulate during downturns. ESGV experienced a slightly smaller maximum drawdown during the COVID-19 market collapse, suggesting modest downside protection in systemic shocks. However, during the 2022 rate-hike driven bear market, ESGV exhibited deeper and more persistent drawdowns than VTI, indicating that ESG screening does not consistently reduce downside risk across different market regimes. These results highlight that ESG’s risk profile is conditional rather than universally defensive.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                  {/* LEFT: Chart */}
                  <div className="lg:col-span-2 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                    <img
                      src="/plots/ESGV_VTI_Drawdown.png"
                      alt="Drawdown chart for ESGV vs VTI"
                      className="block w-full h-auto"
                      loading="lazy"
                    />
                  </div>

                  {/* RIGHT: Explanation */}
                  <div className="space-y-3 text-sm text-gray-700 lg:border-l lg:border-gray-200 lg:pl-4">
                    <h4 className="text-base font-semibold text-gray-900">
                      Interpretation
                    </h4>

                    <p>
                      Drawdown curves illustrate how far each fund falls from its most recent high and how quickly losses accumulate during downturns. ESGV experienced a slightly smaller maximum drawdown during the COVID-19 market collapse, suggesting modest downside protection in systemic shocks. 
                      However, during the 2022 rate-hike driven bear market, ESGV exhibited deeper and more persistent drawdowns than VTI, indicating that ESG screening does not consistently reduce downside risk across different market regimes. These results highlight that ESG’s risk profile is conditional rather than universally defensive.
                    </p>

                  </div>
                </div>
              </div>

              {/* Factor Exposure */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Factor Exposure
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Drawdown curves illustrate how far each fund falls from its most recent high and how quickly losses accumulate during downturns. ESGV experienced a slightly smaller maximum drawdown during the COVID-19 market collapse, suggesting modest downside protection in systemic shocks. However, during the 2022 rate-hike driven bear market, ESGV exhibited deeper and more persistent drawdowns than VTI, indicating that ESG screening does not consistently reduce downside risk across different market regimes. 
                  These results highlight that ESG’s risk profile is conditional rather than universally defensive.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                  {/* LEFT: Chart */}
                  <div className="lg:col-span-2 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                    <img
                      src="/plots/ESGV_VTI_Factor_Exposure.png"
                      alt="Factor exposure comparison for ESGV vs VTI"
                      className="block w-full h-auto"
                      loading="lazy"
                    />
                  </div>

                  {/* RIGHT: Explanation */}
                  <div className="space-y-3 text-sm text-gray-700 lg:border-l lg:border-gray-200 lg:pl-4">
                    <h4 className="text-base font-semibold text-gray-900">
                      Interpretation
                    </h4>

                    <p>
                      The factor exposure results show that ESGV differs from VTI primarily through a strong tilt away from value stocks and a modest tilt toward large-cap growth firms. 
                      The large negative loading on the value factor (HML) indicates reduced exposure to capital-intensive and cyclical sectors such as energy and materials, which were disproportionately impacted during the COVID-19 crash. 
                    </p>

                    <p>
                      The factor exposure results show that ESGV differs from VTI primarily through a strong tilt away from value stocks and a modest tilt toward large-cap growth firms. 
                      The large negative loading on the value factor (HML) indicates reduced exposure to capital-intensive and cyclical sectors such as energy and materials, which were disproportionately impacted during the COVID-19 crash. 
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* LIMITATIONS + NEXT STEPS */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Limitations & Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                While this analysis provides insight into ESGV’s downside behavior, results are inherently sensitive to the chosen time horizon and specific stress episodes examined. ESG fund holdings and screening methodologies may also evolve over time, potentially altering factor exposures and risk characteristics. Additionally, the use of daily returns may obscure longer-horizon risk dynamics relevant to institutional investors.
              </p>

              <p>
                Future extensions of this work could incorporate rolling volatility and Sharpe ratio comparisons to assess time-varying risk-adjusted performance, sector-level attribution to directly quantify the impact of ESG exclusions, and expanded factor models including profitability and investment factors. Examining additional ESG funds across asset classes would further test the robustness of these findings
              </p>
            
            </CardContent>
          </Card>

          {/* LINKS */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900">Project Links</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="outline">GitHub Repo</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}