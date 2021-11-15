class NotesController < ApplicationController
    def index
        notes = Note.all
        #seting a variable to be all of my note objects that I seeded

        render component: "Notes", props: {notes: notes}
    end

    def new
        render component: "NoteNew"
    end

    # def create
    # end

end
