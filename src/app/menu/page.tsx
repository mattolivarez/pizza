
export default function Menu() {
    return (
        <div className="h-dvh">
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border flex">
                <input type="radio" name="my_tabs_2" className="tab flex-auto" aria-label="Classic Pies" defaultChecked />
                <div className="tab-content border-base-300 bg-base-200 p-2">
                    <div className="text-center mb-2">
                        <h5>All Pies are 14&quot;.</h5>
                        <h5>For 16&quot; is a $2.00 upcharge.</h5>
                    </div>
                    <div className="columns-1 gap-2 sm:columns-2 sm:gap-4 lg:columns-3 lg:gap-6 justify-items-center">
                        <div className="card card-dash bg-base-100 break-inside-avoid-column mb-1 min-h-36 min-w-full">
                            <div className="card-body">
                                <h2 className="card-title">The Brooklyn Cheese ....... $14.00</h2>
                                <p>Mozzarella, house red sauce, classic NY crust.</p>
                                {/* <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                        <div className="card card-dash bg-base-100 break-inside-avoid-column mb-1 min-h-36 min-w-full">
                            <div className="card-body">
                                <h2 className="card-title">The Bronx Pepporoni ....... $16.00</h2>
                                <p>Crispy pepperoni, mozzarella, red sauce.</p>
                            </div>
                        </div>
                        <div className="card card-dash bg-base-100 break-inside-avoid-column mb-1 min-h-36 min-w-full">
                            <div className="card-body">
                                <h2 className="card-title">Queens Supreme ....... $18.00</h2>
                                <p>Pepperoni, sausage, green peppers, onions, mushrooms, olives.</p>
                            </div>
                        </div>
                        <div className="card card-dash bg-base-100 break-inside-avoid-column mb-1 min-h-36 min-w-full">
                            <div className="card-body">
                                <h2 className="card-title">Manhattan Margherita ....... $15.00</h2>
                                <p>Fresh mozzarella, tomatoes, basil, olive oil.</p>
                            </div>
                        </div>
                        <div className="card card-dash bg-base-100 break-inside-avoid-column mb-1 min-h-36 min-w-full">
                            <div className="card-body">
                                <h2 className="card-title">Staten Island Sausage ....... $17.00</h2>
                                <p>Spicy Italian sausage, roasted red peppers, caramelized onions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab flex-auto" aria-label="Specialty Pies" />
                <div className="tab-content border-base-300 bg-base-200 p-10">Specialty Pies</div>

                <input type="radio" name="my_tabs_2" className="tab flex-auto" aria-label="Strombolis" />
                <div className="tab-content border-base-300 bg-base-200 p-10">Strombolis</div>

                <input type="radio" name="my_tabs_2" className="tab flex-auto" aria-label="Sides & Extras" />
                <div className="tab-content border-base-300 bg-base-200 p-10">Sides & Extras</div>

                <input type="radio" name="my_tabs_2" className="tab flex-auto" aria-label="Pin Wheels" />
                <div className="tab-content border-base-300 bg-base-200 p-10">Pin Wheels</div>

                <input type="radio" name="my_tabs_2" className="tab flex-auto" aria-label="Calzones" />
                <div className="tab-content border-base-300 bg-base-200 p-10">Calzones</div>

                <input type="radio" name="my_tabs_2" className="tab flex-auto" aria-label="Side Sauces" />
                <div className="tab-content border-base-300 bg-base-200 p-10">Side Sauces</div>

                <input type="radio" name="my_tabs_2" className="tab flex-auto" aria-label="Desserts" />
                <div className="tab-content border-base-300 bg-base-200 p-10">Desserts</div>

                <input type="radio" name="my_tabs_2" className="tab flex-auto" aria-label="Drinks" />
                <div className="tab-content border-base-300 bg-base-200 p-10">Drinks</div>
            </div>
        </div>
    );
}
