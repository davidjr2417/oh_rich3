Rails.application.routes.draw do
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'

  resources :guess
    get '/guess_deals1', to: 'guess#deal_pg1'
    get '/guess_deals2', to: 'guess#deal_pg2'
    get '/guess_deals3', to: 'guess#deal_pg3'
    get '/guess_results1', to: 'guess#results_pg1'
    get '/guess_results2', to: 'guess#results_pg2'

  resources :pick_genius

  resources :js_app1
  get '/js_app1_b', to: 'js_app1#js_app1_b'  
      # get '/guess_deals1', to: 'guess#deal_pg1'

# render :action => 'show'


end
