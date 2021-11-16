class NotesController < ApplicationController
    def index
        notes = Note.all
        #seting a variable to be all of my note objects that I seeded

        render component: "Notes", props: {notes: notes}
    end

    def new
        render component: "NoteNew"
    end

    def create
        Note.create(title: params[:note][:title], description: params[:note][:description])
        redirect_to notes_path
    end

end
